import { useEffect, useState } from 'react';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAgent } from '../store/AgentContext';

// Save automatically after 2 seconds of no changes
const SAVE_DELAY = 2000; 

export function usePlan(planId = 'default-plan') {
  const { state, dispatch } = useAgent();
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);

  // 1. Real-time Listener (Load data)
  useEffect(() => {
    if (!planId) return;
    
    const unsub = onSnapshot(doc(db, "plans", planId), (doc) => {
      if (doc.exists()) {
        // We found a saved plan, load it into the Agent Context
        const data = doc.data();
        // Avoid overwriting if we are currently editing (basic conflict avoidance)
        dispatch({ type: 'LOAD_PLAN', payload: data });
      }
    });

    return () => unsub();
  }, [planId, dispatch]);

  // 2. Auto-Save Logic
  useEffect(() => {
    const saveToDb = async () => {
      setIsSaving(true);
      try {
        await setDoc(doc(db, "plans", planId), state.accountPlan);
        setLastSaved(new Date());
      } catch (e) {
        console.error("Save failed", e);
      } finally {
        setIsSaving(false);
      }
    };

    const timer = setTimeout(() => {
        // Only save if the title isn't the default one (meaning we actually did something)
        if (state.accountPlan.targetCompany !== 'Untitled Analysis') {
            saveToDb();
        }
    }, SAVE_DELAY);

    return () => clearTimeout(timer);
  }, [state.accountPlan, planId]);

  return { isSaving, lastSaved };
}
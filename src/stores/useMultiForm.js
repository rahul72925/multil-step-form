import { create } from "zustand";
import { produce } from "immer";

export const useMultiForm = create((set) => ({
  form: {},
  currentStepId: 1,
  isFormSubmitted: false,
  currentTiming: "month",
  availableSteps: [
    {
      id: 1,
      title: "Your Info",
    },
    {
      id: 2,
      title: "Select Plan",
    },
    {
      id: 3,
      title: "Add Ons",
    },
    {
      id: 4,
      title: "Summary",
    },
  ],
  updateForm: (data, key) =>
    set(
      produce((state) => {
        state.form[key] = data;
      })
    ),
  updateCurrentStep: (id) => set(() => ({ currentStepId: id })),
  updateCurrentTiming: (time) => set(() => ({ currentTiming: time })),
  updateSubmitForm: (val) => set(() => ({ isFormSubmitted: val })),
}));

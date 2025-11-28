import { create } from "zustand";

export type IUseFormSteps = {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
};

export const useFormSteps = create<IUseFormSteps>((set) => ({
  step: 0,
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  setStep: (step) => set({ step }),
}));

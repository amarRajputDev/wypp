import { create } from "zustand";
import { user } from "../../types.ts";

interface UserState {
    userData: user | null;
    isLogin: boolean;
    setUser: (userData: user) => void;
    logout: () => void;
  }

const useUserStore = create<UserState>((set)=>({
    isLogin :false ,
    userData : null,

    setUser : (data : user) => set({userData:data , isLogin : true}),

    logout: () => set({ userData: null, isLogin: false }),
}))

export default useUserStore
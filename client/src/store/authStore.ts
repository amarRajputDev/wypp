import { create } from "zustand";
import { user } from "../../types.ts";

interface UserState {
  userData: user | null;
  isLogin: boolean;
  onlineUsers: string[] | null;
  setUser: (userData: user) => void;
  logout: () => void;
  setOnlineUsers: (onlineUsers: string[]) => void;
}

// Load initial state from localStorage
const storedUser = localStorage.getItem("userData");
const storedIsLogin = localStorage.getItem("isLogin");

const useUserStore = create<UserState>((set) => ({
  isLogin: storedIsLogin === "true",
  userData: storedUser ? JSON.parse(storedUser) : null,
  onlineUsers: null,

  setUser: (data: user) => {
    localStorage.setItem("userData", JSON.stringify(data));
    localStorage.setItem("isLogin", "true");
    set({ userData: data, isLogin: true });
  },

  logout: () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("isLogin");
    set({ userData: null, isLogin: false });
  },

  setOnlineUsers: (onlineUsers: string[]) => {
    set({ onlineUsers });
  },
}));

export default useUserStore;

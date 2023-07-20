import { useEffect } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { useAppDispatch } from "./redux/hooks";
import { setLoading, setUser } from "./redux/features/user/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lb/firebase";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      dispatch(setUser(user?.email));
    });
    dispatch(setLoading(false));
  }, [dispatch]);
  return (
    <div>
      <MainLayout />
    </div>
  );
}

export default App;

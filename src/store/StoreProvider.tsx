import { Provider } from "react-redux";
import { persistorCart, store } from ".";
import { PersistGate } from "redux-persist/integration/react";
import { ReactNode } from "react";

export default function StoreProvider({ children }: { children: ReactNode }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistorCart}>
                {children}
            </PersistGate>
        </Provider>
    )
}
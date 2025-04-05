import { BrowserRouter } from "react-router-dom";
import { Header } from "./header";

export default function Root() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

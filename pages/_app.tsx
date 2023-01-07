import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../src/theme/theme";
import "../styles/globals.css";
import amount, { myContextType } from "../src/contexts/amount";
import { useState } from "react";

const { Provider } = amount;

function MyApp({ Component, pageProps }: AppProps) {
	// const [amountOfPills, setAmountOfPills] = useState<{total:number, amount:number}>({
	// 	total:0,
	// 	amount:0
	// })

	// const changeData = (data: {total:number,amount:number}) => {
	// 	setAmountOfPills(data)
	// }

  return (
    <ChakraProvider theme={theme}>
      {/* <Provider value={{amountOfPills, changeData}}> */}
        <Component {...pageProps} />
      {/* </Provider> */}
    </ChakraProvider>
  );
}

export default MyApp;

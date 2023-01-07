import { Accordion, Box, Button, Center, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../../src/Layout/MainLayout";
import Accord from "../../src/Components/Accord";
import Tablets from "../../src/Components/Tablets";
import Link from "next/link";
import { defStyle } from "../../src/Layout/MainLayout";
import HookUsage from "../../src/Components/Increment";
import amount from "../../src/contexts/amount";

function Discraption() {
	const [data, setData] = useState<any>(null)

		useEffect(() => {
			if(typeof window !== 'undefined') {
				setData(JSON.parse(window.localStorage.getItem('data')))
			}
		}, [])
		

	return (
		<MainLayout>
			<Center>

		
			<Box height="180px" width="210px" bg="white"  boxShadow="0px 0px 20px rgba(0, 0, 0, 0.12);" borderRadius="15px" textAlign="center" color="brand.lightGreen">
			<Box p="50px">

			Штук: {data?.amount}
			<br />
			Общий счет: {data?.total} сум
			</Box>
			</Box>
			</Center>
		</MainLayout>
	)
}
export default Discraption
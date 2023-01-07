import { background, Box, Button, Center, Input, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useContext, useState } from "react";
import MainLayout from "../../src/Layout/MainLayout";
import { useForm } from "react-hook-form";
import amount from "../../src/contexts/amount";

export default () => {
  const [total, setTotal] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  // const {amountOfPills,setAmountOfPills} = useContext(amount)

  const { register, handleSubmit } = useForm({
    defaultValues: {
      amount: 0,
      total: 0,
      price: 0,
    },
  });

  const findTotal: any = (e: any) => {
    let value: number = +e.target.value;

    let sum = +amount * value;

    setTotal(sum);
  };

  const onSubmit: any = (data: { total: number; amount: number }) => {
    // setAmountOfPills(data)
    localStorage.setItem("data", JSON.stringify({ ...data, total }));
    // if()
  };

  return (
    <MainLayout>
      <Box mb={"40px"}>
        <Center mt="10px">
          <Box
            maxHeight="500px"
            width="500px"
            bg="white"
            pb={"20px"}
            borderRadius="15px"
            boxShadow="0px 0px 20px rgba(0, 0, 0, 0.12);"
          >
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <Box marginLeft="40px" mt="20px">
                <Text fontSize={{ esm: "", pls: "12px" }}>Введите количество</Text>
                <Center>
                  <Input
                    mt="10px"
                    height="40px"
                    width={{ sm: "300px", pls: "85%", lg: "400px" }}
                    borderRadius="15px"
                    placeholder="10.000"
                    {...register("amount", {
                      required: "Tupoy chanta bugesha nanavestiku!",
                    })}
                    onInput={(e: any) => setAmount(e.target.value)}
                    // onInput={findTotal}
                  />
                </Center>
              </Box>

              <Box marginLeft="40px" mt="20px">
                <Text fontSize={{ esm: "", pls: "12px" }}>Введите цену</Text>
                <Center mt="20px">
                  <Input
                    mt="10px"
                    height="40px"
                    width={{ sm: "300px", pls: "85%", lg: "400px" }}
                    borderRadius="15px"
                    placeholder="10.000"
                    // defaultValue={total}
                    {...register("price", {
                      required: "Tupoy chanta bugesha nanavestiku!",
                    })}
                    onInput={findTotal}

                    // onInput={(e:any) => setPrice(e.target.value)}
                  />
                </Center>
              </Box>

              <Box marginLeft="40px" mt="20px">
                <Text fontSize={{ esm: "", pls: "12px" }}>Общая сумма</Text>
                <Center>
                  <Input
                    mt="10px"
                    height="40px"
                    width={{ sm: "300px", pls: "85%", lg: "400px" }}
                    borderRadius="15px"
                    placeholder="10.000"
                    value={total}
                    {...register("total", {
                      required: "Tupoy chanta bugesha nanavestiku!",
                    })}
                    // onInput={findTotal}
                  />
                </Center>
              </Box>
                <Box>

              <Center mt="20px">
			  <Button
                    height="50px"
                    p={{ md: "25px 60px", esm: "15px 50px", pls: "13px 45px" }}
                    bg="brand.lightGreen"
                    type="submit"
                    // onClick={() => setTodos([...todos, todo, tods])}
                  >
                 Save
                  </Button>
                  <Link href="/Title/Title">
                  <Button
				  ml="20px"
                    height="50px"
                    p={{ md: "25px 60px", esm: "15px 50px", pls: "13px 45px" }}
                    bg="brand.lightGreen"
               
                    // onClick={() => setTodos([...todos, todo, tods])}
                  >
                    Add
                  </Button>
                  </Link>
					  </Center>

                  <Box >
                    {/* {todos.map((todo, tods, index) => (
                  <Box height="100px" width="100px" bg="black">
                    <Text color="white">{todo}</Text>
                  </Box>
                ))} */}
                    {/* <button onClick={() => removeTodo(todo)}>remove</button> */}
                  </Box>
                </Box>
            </form>
          </Box>
        </Center>
        {/* {amountOfPills?.total} */}
      </Box>
    </MainLayout>
  );
};

import React, { useEffect } from 'react'
import {
    Container, Box, FormControl, FormLabel, Input,
    Stack, Checkbox, CheckboxGroup,
    Radio, RadioGroup, HStack, Button
} from '@chakra-ui/react'
import { useForm, Controller } from "react-hook-form";
import axios from 'axios'


function Home() {

    const { register, handleSubmit, control, watch, reset, setValue, errors } = useForm();

    useEffect(async () => {
        const result = await axios.get('/formValues.json');
        reset(result.data);

    }, [reset])

    const submitForm = (data) => {
        console.log(data);
    }

    return (
        <Container maxW={1140} centerContent p={5} h="100vh" bg="gray.100"> 
            <Box w="70%" bg="white" rounded={8} py="20px" px="25px">
                <form onSubmit={handleSubmit(submitForm)}>
                    <FormControl id="email" mb={4}>
                        <FormLabel>Email address</FormLabel>
                        <Input ref={register} type="email" name="email" />
                    </FormControl>

                    <FormControl id="email" mb={4}>
                        <FormLabel>Name</FormLabel>
                        <Input ref={register} type="text" name="name" />
                    </FormControl>

                    <FormControl id="email" mb={4}>
                        <FormLabel>Age</FormLabel>
                        <Input ref={register} type="number" name="age" />
                    </FormControl>

                    <Controller
                        control={control}
                        name="type"
                        defaultValue=""
                        render={(
                            { onChange, onBlur, value, name, ref },
                            { invalid, isTouched, isDirty }
                        ) => {
                            console.log(value);
                            return (
                                <RadioGroup mb="20px" onChange={(val) => onChange(val)} value={value}>
                                    <Stack direction="row">
                                        <Radio name="type" value="1">First</Radio>
                                        <Radio name="type" value="2">Second</Radio>
                                        <Radio name="type" value="3">Third</Radio>
                                    </Stack>
                                </RadioGroup>
                            )
                        }}
                    />

                    <HStack>
                        <Controller
                            control={control}
                            name="married"
                            defaultValue=""
                            render={(
                                { onChange, onBlur, value, name, ref },
                                { invalid, isTouched, isDirty }
                            ) => {
                                return (
                                    <Checkbox
                                        onChange={(e) => onChange(e.target.checked)}
                                        isChecked={value}
                                    >Married</Checkbox>
                                )
                            }}
                        />

                        <Controller
                            control={control}
                            name="employeed"
                            defaultValue=""
                            render={(
                                { onChange, onBlur, value, name, ref },
                                { invalid, isTouched, isDirty }
                            ) => {
                                return (
                                    <Checkbox
                                        onChange={(e) => onChange(e.target.checked)}
                                        isChecked={value}
                                    >Employeed</Checkbox>
                                )
                            }}
                        />
                    </HStack>

                    <Button type="submit" mt="15px">Save</Button>
                    
                </form>
            </Box>
        </Container>
    )
}

export default Home

import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import AuthNavBar from "../../components/NavBar/AuthNavBar";
import Balances from "./Balances/balances";

const WalletTemp = () => {
    const [showBalance, setShowBalance] = useState(true);
    return (
        <AuthNavBar>
            <Box mx="120px" mt="80px">
                <Flex w="100%">
                    <Box boxShadow="rgba(0, 0, 0, 0.09) 0px 3px 12px" w="80%" borderRadius="4px">
                        <Flex fontWeight="bold" fontSize="25px" alignItems="center" justifyContent="space-between">
                            <Text color={!showBalance && "brand.gray"} onClick={() => setShowBalance(true)} cursor="pointer" bg={showBalance && "#FAFAFA"} py="20px" w="50%" textAlign="center">Balances</Text>
                            <Text color={showBalance && "brand.gray"} onClick={() => setShowBalance(false)} cursor="pointer" bg={!showBalance && "#FAFAFA"} py="20px" w="50%" textAlign="center">Collectibles</Text>
                        </Flex>
                        <Box>
                            {showBalance ? <Balances /> : null}
                        </Box>
                    </Box>
                    <Box w="30%"></Box>
                </Flex>
            </Box>
        </AuthNavBar>
    )
};

export default WalletTemp;
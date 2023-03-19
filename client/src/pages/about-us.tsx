import { Typography, Box, Stack } from "@pankod/refine-mui";
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import {Place} from "@mui/icons-material";

const AboutUs = () => {
    return (
       <Box
            borderRadius="15px"
            padding="20px"
            bgcolor="#FCFCFC"
            width="fit-content"
            marginLeft="35px"

       >
            <Typography  fontSize={25} fontWeight={700} color="#11142D" > About Us  <HomeWorkIcon></HomeWorkIcon> </Typography>
            <Box 
                mt="20px"
                display="flex"
                flexDirection={{ xs: "column", lg: "row" }}
                gap={4}
            >
                <Box flex={1} maxWidth={1600} >
                    <img
                        src='https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt="property_details-img"
                        height={700}
                        width={1600}
                        style={{ objectFit: "cover", borderRadius: "10px" }}
                        className="property_details-img"
                    />

                    <Box  mt="15px" >
                            <Box>
                                <Typography
                                    fontSize={22}
                                    fontWeight={600}
                                    mt="10px"
                                    color="#11142D"
                                >
                                    About our company:
                                </Typography>
                                <Stack
                                    mt={0.5}
                                    direction="row"
                                    alignItems="center"
                                    gap={0.5}
                                >
                                    <Place sx={{ color: "#808191" }} />
                                    <Typography fontSize={14} color="#808191">
                                        Situated in New York
                                    </Typography>
                                </Stack>
                            </Box>

                            <Stack mt="25px" direction="column" gap="10px">
                            <Typography fontSize={18} color="#11142D" textAlign="justify" padding="10px">
                            HotelHive is a hotel booking company that specializes in providing travelers 
                            with unique and personalized hotel experiences. Their platform offers a vast 
                            selection of accommodations ranging from budget-friendly to luxurious, all 
                            carefully curated to meet the needs and preferences of their customers. 
                            HotelHive's user-friendly website and mobile app make booking and managing 
                            reservations seamless and hassle-free. In addition, the company prides itself 
                            on its exceptional customer service, providing support to guests around the clock. 
                            HotelHive's commitment to providing personalized experiences, combined with their 
                            technological prowess and outstanding customer service, has made them a popular 
                            choice among travelers seeking memorable and stress-free hotel stays.
                            </Typography>
                            </Stack>

                    </Box>

                </Box>

            </Box>
       </Box>
    )
}

export default AboutUs;
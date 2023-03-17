import { useList } from '@pankod/refine-core';

import{ Typography, Box, Stack} from '@pankod/refine-mui'

import QueryStatsIcon from '@mui/icons-material/QueryStats';

import{
    PieChart,
    PropertyReferrals,
    TotalRevenue,
    PropertyCard,
    TopAgent
} from 'components';
 

const home = () => {
    return(

        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142D">
                HotelHive Dashboard <QueryStatsIcon sx={{ fontSize:30 }}/>
            </Typography>

            <Stack mt="25px" width="100%" direction={{xs: 'column', lg: 'row'}} gap={4}>
                <TotalRevenue/>
                <PropertyReferrals/>
            </Stack>

            <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
                <PieChart
                    title="Hotels for Sale"
                    value={684}
                    series={[75,25]}
                    colors={['#6AFFBD', '#1B2E58']}                
                />
                <PieChart
                    title="Hotels for Rent"
                    value={550}
                    series={[60,40]}
                    colors={['#6AFFBD', '#1B2E58']}                
                />
                <PieChart
                    title="Total customers"
                    value={5684}
                    series={[75,25]}
                    colors={['#6AFFBD', '#1B2E58']}                
                />
                <PieChart
                    title="Hotels for Cities"
                    value={555}
                    series={[75,25]}
                    colors={['#6AFFBD', '#1B2E58']}               
                />
            </Box>
        </Box>
        
    )
}

export default home
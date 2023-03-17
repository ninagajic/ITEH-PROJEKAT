import { ArrowCircleUpRounded } from '@mui/icons-material'

import EqualizerIcon from '@mui/icons-material/Equalizer';

import ReactApexChart from 'react-apexcharts'

import { Typography, Box, Stack} from '@pankod/refine-mui'

import { TotalRevenueOptions, TotalRevenueSeries } from './chart.config'

const totalRevenue = () => {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor="#fcfcfc"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#1B2E58">
        Total Revenue  <EqualizerIcon sx={{
            fontSize: 30
          }}/>
      </Typography>

      <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={28} fontWeight={700} color='#1B2E58'>$236,535</Typography>
        <Stack direction="row" alignItems="center" gap={1} >
          <ArrowCircleUpRounded sx={{
            fontSize: 25, color: "#1B2E58"
          }}/>
          <Stack>
            <Typography fontSize={15} color="#1B2E58">
              0.8%
            </Typography>
            <Typography fontSize={12} color="#1B2E58">
              Than Last Month
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <ReactApexChart
        series={TotalRevenueSeries}
        type="bar"
        height={310}
        options={TotalRevenueOptions}
      />
    </Box>
  )
}

export default totalRevenue
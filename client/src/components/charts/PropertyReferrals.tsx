import { Typography, Box, Stack} from '@pankod/refine-mui';

import { propertyReferralsInfo } from 'constants/index';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';

interface ProgressBarProps{
  title: string,
  percentage: number,
  color: string,
}

const ProgressBar = ({title, percentage, color} : ProgressBarProps) => (
    <Box width="100%">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography fontSize={16} fontWeight={500} color="#1B2E58">{title}</Typography>
        <Typography fontSize={19} fontWeight={500} color="#6AFFBD">{percentage}%</Typography>
      </Stack>
      <Box mt={2} position="relative" width="100%" height="8px" borderRadius={1} bgcolor="#1B2E58">
          <Box
            width={`${percentage}%`}
            bgcolor={color}
            position="absolute"
            height="100%"
            borderRadius={1}
          />
      </Box>
    </Box>
)


const PropertyReferrals = () => {
  return (
    <Box
      p={4}
      bgcolor="#fcfcfc"
      id="chart"
      minWidth={490}
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Hotel Referrals <TrendingUpIcon/>
      </Typography>

      <Stack my="20px" direction="column" gap={4}>
            {propertyReferralsInfo.map((bar) =>
            <ProgressBar key={bar.title} {...bar}/>)}
      </Stack>
    </Box>
  )
}

export default PropertyReferrals
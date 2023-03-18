import { useList } from "@pankod/refine-core";
import { Box, Typography } from "@pankod/refine-mui";

import { AgentCard } from "components";



const Agents = () => {

    const { data, isLoading, isError } = useList({ resource: "users" });

    //koristi se opcionalni operator ?. da bi se izbeglo pristupanje undefined vrednostima 
    //u objektu data. Ako data ne postoji, uzmemo prazan niz umesto undefined vrednosti.
    const allAgents = data?.data ?? [];

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142d">
                Agents List
            </Typography>

            <Box
                mt="20px"
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    backgroundColor: "#fcfcfc",
                }}
            >
                {allAgents.map((agent) => (
                    (agent.email !== "homenow.manager@gmail.com") && (
                        <AgentCard
                        key={agent._id}
                        id={agent._id}
                        name={agent.name}
                        email={agent.email}
                        avatar={agent.avatar}
                        noOfProperties={agent.allProperties.length}
                        />
                    )
                    ))}

            </Box>
        </Box>
    );
};

export default Agents;
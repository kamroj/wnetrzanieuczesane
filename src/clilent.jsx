import { createClient } from "@sanity/client";

const sanityClient = createClient({
    projectId: "dzislslk",
    dataset: "production",
    useCdn: false,
    apiVersion: '2024-04-24'
})

export default sanityClient;
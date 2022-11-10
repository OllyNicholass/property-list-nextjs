import { GetStaticProps } from 'next'
import { Property } from '../../interfaces/property'
import Layout from '../../components/Layout'
import PropertyList from '../../components/properties/PropertyList'
import axios from 'axios'

type Props = {
  propertyList: Property[]
}

const Properties = ({ propertyList }: Props) => {
  return (
    <Layout title="Property List">
      <h1>Property List</h1>
      {/* Check items exist before trying to render */}
      {propertyList ? <PropertyList propertyList={propertyList} />  : 'No properties to list'}
    </Layout>
  )
}

export const getPropertyData = async (endpoint: string) => {
  // Fetch data on build
  try {
    const result = await axios.get<Property[]>(endpoint);
    return result.data
  } catch (err) {
    // TS doesn't support type annotations on the catch variable
    let errMessage = (err as Error).message;
    throw new Error(errMessage);
  }
}

export const getStaticProps: GetStaticProps = async () => {

  let propertyList = await getPropertyData(`${process.env.API_ENDPOINT}/properties`);

  return {
    props: {
        propertyList: propertyList
    }
  }
 
  
  // This could asynchronously fetch data from a DB or API
  // const items: Property[] = samplePropertyData
  // return { props: { items } }
}

export default Properties

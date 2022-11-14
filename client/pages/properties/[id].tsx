import { GetStaticProps, GetStaticPaths } from 'next'

import { Property } from '../../interfaces/property'
import Layout from '../../components/Layout'
import PropertyDetail from '../../components/properties/PropertyDetail'
import { getPropertyData } from '.'

type Props = {
  property?: Property
  errors?: string
}

const PropertyDetailView = ({ property, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout title={`${property ? property.name : 'Property Detail'}`}>
      {property && <PropertyDetail property={property} />}
    </Layout>
  )
}

export default PropertyDetailView

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on properties
  const results = await getPropertyData(`${process.env.API_ENDPOINT}/properties`)

  const paths = results.map((property) => ({
    params: { id: property.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// getStaticProps gets called at build time on the server.
// It won't be called on the client, so could do direct DB queries.

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    // Find specific property by ID

    return {
      props: {
        property: await getPropertyData(`${process.env.API_ENDPOINT}/properties/${id}`)
      }
    }
  } catch (err) {
    // TS doesn't support type annotations on the catch variable
    let errMessage = (err as Error).message;
    return { props: { errors: errMessage } }
  }
}

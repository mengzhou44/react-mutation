import { gql, useMutation } from '@apollo/client';

const CREATE_PRODUCT = gql`
  mutation CreateProduct($record: CreateOneProductInput!) {
    createProduct(record: $record) {
      record {
        name
      }
    }
  }
`;

function Products() {
  const [createProduct, { data, loading, error }] = useMutation(CREATE_PRODUCT);

  if (data) {
    return <div> Product is created!</div>;
  }

  if (loading) {
    return <div> running.... </div>;
  }

  if (error) {
    return <div> {error.message}</div>;
  }

  return (
    <button
      onClick={() =>
        createProduct({
          variables: {
            record: {
              name: 'hot dog 456',
              supplierID: 1,
              categoryID: 1,
              quantityPerUnit: '3',
            },
          },
        })
      }
    >
      Create Product
    </button>
  );
}

export default Products;

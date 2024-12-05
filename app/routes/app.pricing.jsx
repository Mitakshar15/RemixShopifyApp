import { json } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';

import { AccountConnection, BlockStack, Box, Button, Card, Divider, InlineGrid, Layout, Link, Page, Text, TextField, useBreakpoints } from '@shopify/polaris';
import React, { useCallback, useState } from 'react';



export async function loader(){

let pricing = {
    name:"Mitakshar",
    description:"ALT D"
    }

return json(pricing);

}

export async function action(){
 return json({message:"SETTINGS UPDATED"});
}

const pricing = () => {
  
  const pricing = useLoaderData();

  const[formState,setFormState] = useState(pricing);
  console.log(formState);
  return (

    <Page>
     <BlockStack gap={{ xs: "800", sm: "400" }}>
        <InlineGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="400">
          <Box
            as="section"
            paddingInlineStart={{ xs: 400, sm: 0 }}
            paddingInlineEnd={{ xs: 400, sm: 0 }}
          >
            <BlockStack gap="400">
              <Text as="h3" variant="headingMd">
                App Name
              </Text>
              <Text as="p" variant="bodyMd">
                Description
              </Text>
            </BlockStack>
          </Box>
          <Card roundedAbove="sm">
            <Form method='POST'>
            <BlockStack gap="400">
              <TextField label="App Name" name='name' value={formState.name} onChange={(value)=>setFormState({...formState, name:value})}  />
              <TextField label="Description" name='description' value={formState.description} onChange={(value)=>setFormState({...formState,description:value})}/>
                <Button submit={true}>Save</Button>
            </BlockStack>
            </Form>
          </Card>
        </InlineGrid>
        
      </BlockStack>
    </Page>

  );
}

export default pricing;

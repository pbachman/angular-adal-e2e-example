# Simple E2E Example if your angular6 App uses Azure AD Authentication.

How to write an E2E Test, if your angular app uses Azure AD Authentication ? Look at this Example. It uses [adal-angular4](https://github.com/benbaran/adal-angular4) to handle the Azure AD Authentication.

## Installation

```sh
npm install
```

## Configuration

Add your TenantId and ClientId in the ADAL Configuration.

```sh
const config: adal.Config = {
  tenant: '[your tenantId]',
  clientId: '[your applicationId]',
  cacheLocation: 'localStorage'
};
```
## Azure Docs

https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant#use-an-existing-tenant (TenantId)

https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-create-service-principal-portal#get-application-id-and-authentication-key (ApplicationId)

## How to start ?

Run `ng serve` and `ng e2e --port 5000` to execute the end-to-end tests.

## Questions or Suggestions ?

Feel free to contact me.

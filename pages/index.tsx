import { withAuthenticator } from 'aws-amplify-react/lib/Auth'
import React from 'react'

import '../auth/config'

function SecretPage() {
  return <h1>boo!</h1>
}

export default withAuthenticator(SecretPage)

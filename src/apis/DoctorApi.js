import axios from 'axios'
import config from '@/secrets/config.json'

const fetch = () => {
  return axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/' + 'https://pbsa-prod.us-south.containers.mybluemix.net/d06f7015-3474-40ac-ae5d-d77f220fa068/onboarding',
    headers: {
      'accept': 'application/json',
      'Authorization': `bearer ${config.admin}`
    }
  })
}

export default {
  getSolutionById (solutionId) {
    return fetch().get('/v1/solutions', {
      params: {
        "solutionId": solutionId
      }
    })
  },

  putOrgs (model) {
    return fetch().put('/v1/organizations', {
      params: {
        "solutionId": model.solutionId
      },
      "name": model.name,
      "solutionId": model.solutionId,
      "blockchainUserMode": "user",
      "walletManagerURL": "https://pbsa-prod.us-south.containers.mybluemix.net/d06f7015-3474-40ac-ae5d-d77f220fa068/onboarding"
    })
  },

  searchAllUsers (model) {
    return fetch().get('/v1/search/users', {
      params: {
        "solutionId": model.solutionId
      }
    })
  },

  postOrgAdmin (model) {
    return fetch().post(`/v1/organizations/${model.organizationId}/administrators`, {
      params: {
        "solutionId": model.solutionId
      },
      "organizationAdministrators": [
        model.adminEmailId
      ],
    })
  }

}

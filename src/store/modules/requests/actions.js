export default {
  async contactCoach(context, payload) {
    let newRequest = {
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };

    const response = await fetch(
      'https://vue-http-demo-389f4-default-rtdb.firebaseio.com/requests.json',
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      // error
      const error = new Error(responseData.message || 'Something went wrong!');
      throw error;
    }

    newRequest = {
      id: responseData.name,
      ...newRequest,
    };

    console.log('newRequest: ', newRequest);

    context.commit('addRequest', newRequest);
  },
  async loadRequests(context) {
    const response = await fetch(
      'https://vue-http-demo-389f4-default-rtdb.firebaseio.com/requests.json'
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Something went wrong!');
      throw error;
    }

    const requests = [];

    for (let data in responseData) {
      let request = {
        id: data,
        ...responseData[data],
      };
      requests.push(request);
    }

    context.commit('setRequests', requests);
  },
};

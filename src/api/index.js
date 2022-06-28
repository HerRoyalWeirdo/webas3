import { client, q } from '../config/db.js';


export const getAllGradients = client
  .query(q.Paginate(q.Match(q.Ref('indexes/all_grads'))))
  .then(response => {
    const gradRef = response.data;
    const getAllDataQuery = gradRef.map(ref => {
      return q.Get(ref);
    });
    return client.query(getAllDataQuery).then(data => data);
  })
  .catch(error => console.error('Error: ', error.message));

export const createGradientItem = name =>
client
.query(
    q.Create(q.Collection('gradients'), {
    data: {
        name
    }
    })
)
.then(ret => ret)
.catch(error => console.error('Error: ', error.message));

export const deleteGradientItem = gradId =>
  client
    .query(q.Delete(q.Ref(q.Collection('gradients'), gradId)))
    .then(ret => ret)
    .catch(error => console.error('Error: ', error.message));
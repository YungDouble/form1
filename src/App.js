import React from 'react';
import { Form, Field } from 'react-final-form'
import './App.css';


const sleep = ms => new Promise(resolve => setTimeout(resolve.ms))
const showResults = async values => {
  await sleep(500) //simulate Server latency
}
const required =value => (value ? undefined : 'Required' )
const App = () => (
  <div class="main">
    <h1>Record Request Form</h1>
    <Form onSubmit={showResults}>
    {({handleSubmit, values, submitting }) => (
    <form onSubmit={handleSubmit}>
    <Field 
      name="firstName"
        placeholder="First Name"
        validate={required}
        >{({input, meta, placeholder}) => (
         <div>
           <label>First Name: </label>
           <input {...input} placeholder={placeholder} />
           {meta.error && meta.touched && <span>{meta.error}</span>}
         </div>
    )}
    </Field>
    
    <Field 
      name="lastName"
        placeholder="Last Name"
        validate={required}
        >{({input, meta, placeholder}) => (
         <div>
           <label>Last Name: </label>
           <input {...input} placeholder={placeholder} />
           {meta.error && meta.touched && <span>{meta.error}</span>}
         </div>
    )}
    </Field>

    <Field 
      name="email"
        placeholder="Email"
        validate={required}
        >{({input, meta, placeholder}) => (
         <div>
           <label>Email: </label>
           <input {...input} placeholder={placeholder} />
           {meta.error && meta.touched && <span>{meta.error}</span>}
         </div>
    )}
    </Field>

    <Field 
      name="schoolDistrict"
        placeholder="School District"
        validate={required}
        >{({input, meta, placeholder}) => (
         <div>
           <label>School District: </label>
           <input {...input} placeholder={placeholder} />
           {meta.error && meta.touched && <span>{meta.error}</span>}
         </div>
    )}
    </Field>

    <Field 
      name="Record Series"
        placeholder="Record Series"
        validate={required}
        >{({input, meta, placeholder}) => (
         <div>
           <label>Record Series: </label>
           <input {...input} placeholder="SR, SPED, HR or AR" />
           {meta.error && meta.touched && <span>{meta.error}</span>}
         </div>
    )}
    </Field>

    <button class="bttn" type="submit" disabled={submitting}>Submit</button>
    <pre>{JSON.stringify(values, undefined, 2)}</pre>
    </form>     
    )}
    </Form>
  </div>
)

export default App

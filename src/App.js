import React from 'react';
import { Form, Field } from 'react-final-form'
import Styles from './Styles'
import logo from './logo.png'


const sleep = ms => new Promise(resolve => setTimeout(resolve.ms))
const showResults = async values => {
  await sleep(500) //simulate Server latency
}
const required =value => (value ? undefined : 'Required' )
const App = () => (
  <Styles>
  <img src={logo} className="App-logo" alt="logo" />
  <div class="main">
    <h1>Record Request Form</h1>
    <Form onSubmit={showResults}>
    {({handleSubmit, values, submitting }) => (
    <form onSubmit={handleSubmit}>
      <h3>Requester Information</h3>
      <h6>This is the person requesting the records</h6>
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
      name="recordSeries"
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
    <h3>Person Information</h3>
    <h6>This is the person the record(s) belong(s) to</h6>
    <Field 
      name="personFirstName"
        placeholder="Person's First Name"
        validate={required}
        >{({input, meta, placeholder}) => (
         <div>
           <label>Person First Name: </label>
           <input {...input} placeholder={placeholder} />
           {meta.error && meta.touched && <span>{meta.error}</span>}
         </div>
    )}
    </Field>

    <Field 
      name="personLastName"
        placeholder="Person's Last Name"
        validate={required}
        >{({input, meta, placeholder}) => (
         <div>
           <label>Person Last Name: </label>
           <input {...input} placeholder={placeholder} />
           {meta.error && meta.touched && <span>{meta.error}</span>}
         </div>
    )}
    </Field>

    <button class="bttn" type="submit" disabled={submitting}>Submit</button>
    <button class="bttn" type="clear">Clear</button>
    <pre>{JSON.stringify(values, undefined, 2)}</pre>
    </form>     
    )}
    </Form>
  </div>
  </Styles>
)

export default App

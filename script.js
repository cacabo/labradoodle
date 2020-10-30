let values = [
  '09',
  '12',
  '2020',
  'Gary',
  'Cabo',
  'Architect',
  'Laura',
  'Cabo',
  'Creative Executive',
  '3688 Buena Park Dr.',
  '',
  'Studio City',
  'California',
  '91604',
  'United States',
  '1',
  '617',
  '784',
  '9455',
  'gcabo59@gmail.com',
  'Pet',
  'Breeding',
  'Performance',
  'Therapy Work',
  '',
  'No Preference',
  'No Preference',
  'No Preference',
  'No Preference',
  'No Preference',
  'No Preference',
  'No Preference',
  'No Preference',
  'No Preference',
  'No Preference',
  'Medium (18 to 21 inches)',
  'Cameron, male, 22',
  '',
  'No',
  'No',
  'No',
  'We do have a 13 year old sweetest -cockapoo- ever named Mango. He has been our furry child along with our now 2 grown boys, Cam and Jackson.',
  'Through colleagues related to my work in Arizona on various college campuses.',
  'We are ready any time!',
  'No',
  '',
  'Yes',
  'Yes',
  '',
  'During the day and night , the puppy will always live in our home with my wife and I. We will crate train. Once the puppy is potty trained, we will allow him/or her the opportunity to move outside the crate if that seems appropriate.',
  'We are both working from home, along with our 22 yr. old son for probably well into 2021. My wife generally works from home in the mornings pre-pandemic and we have a trusted dog walker (husband and wife) who assists with daily walks.',
  'We live in a beautiful Los Angeles suburb with a wonderful fenced in property on a cul du sac. The quiet neighborhood is very walkable with many options for interesting walks and many neighborhood doggies to get to know.  ',
  'Yes',
  'Yes',
  'We will do so initially through exposure to neighborhood dogs as appropriate with vaccinations, etc. When old enough, we will engage in some group training. And of course, we have our cockapoo, Mango.',
  'My wife and I are in our last couple years of work and then plan to retire! This puppy will be our companion and great source of joy in our daily lives. We love to walk, hike and explore and take our dog Mango with us where ever possible. ',
  'We know from experience that a puppy requires a lot of attention and we are ready to give it! We love our Mango so much and cannot wait to have a new addition to the family. The pandemic is a perfect time to do this!',
  'Yes',
  'Mango is a 13 year old cockapoo (mother :cockerspaniel, father: mini poodle) and he is neutered.',
  'No other animals.',
  'We love our cockapoo and look forward to a slightly larger version. Many friends have adorable labradoodles that seem to be equally smart, trainable, loving and playful as our Mango. ',
  'Yes',
  'Yes',
  'Dr. Seema Singeetham, DVM',
  '11800 Ventura Blvd. ',
  '',
  'Studio City',
  'California',
  '91604',
  'United States',
  '1',
  '818',
  '769',
  '1338',
  'Ivy Nagahiro 617-319-0352\nSally Thomas 617-797-9263',
  'Submit',
]

const form = document.querySelectorAll('form')[0]
const formFields = Array.from(form.querySelectorAll('*')).filter((jawn) =>
  ['INPUT', 'TEXTAREA', 'SELECT'].includes(jawn.nodeName),
)

function getValues() {
  return formFields.map((jawn) => jawn.value)
}

function setValues(values) {
  formFields.forEach((field, idx) => {
    const value = values[idx]
    if (field.type === 'checkbox') {
      if (value === 'Pet') {
        field.click()
      }
    } else {
      field.value = value
    }
  })
}

function submitForm() {
  const button = formFields[formFields.length - 1]
}

setTimeout(() => {
  setValues(values)
  setTimeout(() => {
    submitForm()
  }, 100)
}, 100)

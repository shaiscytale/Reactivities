import React, { useContext, useEffect, useState } from 'react'
import { Button, Form, Grid, Segment, Select } from 'semantic-ui-react'
import { ActivityFormValues } from '../../../app/models/activity'
import { v4 as uuid } from 'uuid'
import ActivityStore from '../../../app/stores/activityStore'
import { observer } from 'mobx-react-lite'
import { RouteComponentProps } from 'react-router-dom'
import { Form as FinalForm, Field } from 'react-final-form';
import TextInput from '../../../app/common/form/TextInput'
import TextAreaInput from '../../../app/common/form/TextAreaInput'
import SelectInput from '../../../app/common/form/SelectInput'
import { category } from '../../../app/common/options/categoryOptions'
import DateInput from '../../../app/common/form/DateInput'
import { combineDateAndTime } from '../../../app/common/util/util'
import {combineValidators, composeValidators, hasLengthGreaterThan, isRequired} from 'revalidate';

const validate = combineValidators({
  title: isRequired({message: 'The event title is required.'}),
  category: isRequired('Category'),
  description: composeValidators(
    isRequired('Description'),
    hasLengthGreaterThan(4)({message: 'Description must be at least 5 characters long.'})
  )(),
  city: isRequired('City'),
  venue: isRequired('Venue'),
  date: isRequired('Date'),
  time: isRequired('Time')
});

interface DetailParams {
  id: string;
}

const ActivityForm: React.FC<RouteComponentProps<DetailParams>> = ({ match, history }) => {
  const activityStore = useContext(ActivityStore);
  const {
    createActivity,
    editActivity,
    submitting,
    loadActivity } = activityStore;

  const [activity, setActivity] = useState(new ActivityFormValues());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (match.params.id) {
      setLoading(true);
      loadActivity(match.params.id)
        .then((activity) => setActivity(new ActivityFormValues(activity)))
        .finally(() => setLoading(false));
    }
  }, [loadActivity, match.params.id]);

  const handleFinalFormSubmit = (values: any) => {
    const dateAndTime = combineDateAndTime(values.date, values.time);
    const { date, time, ...activity } = values;
    activity.date = dateAndTime;
    if (!activity.id) {
      let newActivity = {
        ...activity,
        id: uuid()
      }
      createActivity(newActivity);
    } else {
      editActivity(activity);
    }
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <Segment clearing>
          <FinalForm
            initialValues={activity}
            validate={validate}
            onSubmit={handleFinalFormSubmit}
            render={({ handleSubmit, invalid, pristine }) => (
              <Form onSubmit={handleSubmit} loading={loading}>
                <Field
                  name='title'
                  placeholder='Title'
                  value={activity.title}
                  component={TextInput}
                />
                <Field
                  name='description'
                  placeholder='Description'
                  value={activity.description}
                  component={TextAreaInput}
                  rows={3}
                />
                <Field
                  name='category'
                  placeholder='Category'
                  value={activity.category}
                  component={SelectInput}
                  options={category}
                  
                />
                <Form.Group widths='equal'>
                  <Field
                    name='date'
                    placeholder='Date'
                    value={activity.date}
                    component={DateInput}
                    date={true}
                  />
                  <Field
                    name='time'
                    placeholder='Time'
                    value={activity.time}
                    component={DateInput}
                    time={true}
                  />
                </Form.Group>
                <Field
                  name='city'
                  placeholder='City'
                  value={activity.city}
                  component={TextInput}
                />
                <Field
                  name='venue'
                  placeholder='Venue'
                  value={activity.venue}
                  component={TextInput}
                />
                <Button
                  loading={submitting}
                  floated='right'
                  positive
                  type='submit'
                  content='Submit'
                  disabled={loading || invalid || pristine}
                />
                <Button
                  floated='right'
                  onClick={() => {
                    if (activity.id)
                      history.push(`/activities/${activity.id}`);
                    else
                      history.push('/activities');
                  }}
                  type='button'
                  content='Cancel'
                  disabled={loading}
                />
              </Form>
            )}
          />
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityForm);
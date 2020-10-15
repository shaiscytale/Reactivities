import React from 'react'
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid'
import List from 'semantic-ui-react/dist/commonjs/elements/List'
import { IActivity } from '../../../app/models/activity'
import { ActivityDetails } from '../details/ActivityDetails'
import { ActivityForm } from '../form/ActivityForm'
import { ActivityList } from './ActivityList'

interface IProps {
  activities: IActivity[]
}

export const ActivityDashboard: React.FC<IProps> = ({activities}) => {

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList activities={activities} />
      </Grid.Column>
      <Grid.Column width={6}>
        <ActivityDetails />
        <ActivityForm />
      </Grid.Column>
    </Grid>
  )
}

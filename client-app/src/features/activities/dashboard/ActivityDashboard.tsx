import React from 'react'
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid/Grid'
import List from 'semantic-ui-react/dist/commonjs/elements/List'
import { IActivity } from '../../../app/models/activity'

interface IProps {
  activities: IActivity[]
}

export const ActivityDashboard: React.FC<IProps> = ({activities}) => {

  return (
    <Grid>
      <Grid.Column width={10}>
        <List>
          {activities.map((activity: IActivity) => (
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
      </Grid.Column>
    </Grid>
  )
}

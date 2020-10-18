import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom';
import { Card, Image, Button } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import ActivityStore from '../../../app/stores/activityStore'

interface DetailParams {
  id: string;
}

export const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({match, history}) => {
  const activityStore = useContext(ActivityStore);
  const {activity, loadActivity, loadingInitial} = activityStore;

  useEffect(() => {
    loadActivity(match.params.id)
  }, [loadActivity, match.params.id]);

  if(loadingInitial || activity === null ) return <LoadingComponent content='Loading activity...' />

  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity!.category}.jpg`} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{activity!.title}</Card.Header>
        <Card.Meta>
          <span className='date'>{activity!.date}</span>
        </Card.Meta>
        <Card.Description>
          {activity!.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button basic as={Link} to={`/manage/${activity.id}`} color='blue' content='Edit' />
          <Button basic onClick={() => history.push('/activities')} color='grey' content='Cancel' />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default observer(ActivityDetails);
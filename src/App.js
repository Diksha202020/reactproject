import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import './App.css';

const UserCard = ({ id, firstName, lastName, email, mobile, website, onDelete }) => {
  const [followed, setFollowed] = useState(false);

  const toggleFollow = () => {
    setFollowed(!followed);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <Card sx={{ maxWidth: 300, margin: '10px', border: '2px solid #333' }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          <div className="circle" style={{ background: `#${Math.floor(Math.random() * 16777215).toString(16)}` }}>
            {firstName.charAt(0)} {lastName.charAt(0)}
          </div>
        </Typography>
        <Typography gutterBottom>{email}</Typography>
        <Typography gutterBottom>{mobile}</Typography>
        <Typography gutterBottom>{website}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={toggleFollow} size="small" variant="contained" color={followed ? 'secondary' : 'primary'}>
          {followed ? 'Unfollow' : 'Follow'}
        </Button>
        <Button onClick={handleDelete} size="small" variant="contained" color="error" >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      firstName: 'Leanne',
      lastName: 'Graham',
      email: 'Sincere@april.biz',
      mobile: '986-555-4567',
      website: 'www.graham.org',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@aol.com',
      mobile: '987-654-3210',
      website: 'www.jsassociates.org',
    },
    {
      id: 3,
      firstName: 'John',
      lastName: 'Cena',
      email: 'john.cena@wwe.com',
      mobile: '987-659-3620',
      website: 'www.wwe.org',
    },
    {
      id: 4,
      firstName: 'Steve',
      lastName: 'Austin',
      email: 'austin.steve@wwf.com',
      mobile: '987-654-3590',
      website: 'www.wwf.org',
    },
    {
      id: 5,
      firstName: 'Jane',
      lastName: 'Foster',
      email: 'jane.forste@example.com',
      mobile: '987-659-3219',
      website: 'www.janefosterassociates.org',
    },
    {
      id: 6,
      firstName: 'Will',
      lastName: 'Smith',
      email: 'jane.smith@marvel.com',
      mobile: '987-624-3212',
      website: 'www.marvels.org',
    },
    {
      id: 7,
      firstName: 'Jane',
      lastName: 'Jones',
      email: 'jane.jones@jackjones.com',
      mobile: '987-684-3210',
      website: 'www.jjentprises.org',
    },
    {
      id: 8,
      firstName: 'Joe',
      lastName: 'Biden',
      email: 'joe.biden@president.us',
      mobile: '987-654-6210',
      website: 'www.gov.us',
    },

    {
      id: 9,
      firstName: 'Bruce',
      lastName: 'Wayne',
      email: 'wayne.bruce@batman.org',
      mobile: '987-654-3110',
      website: 'www.batman.org',
    },

    {
      id: 10,
      firstName: 'Steve',
      lastName: 'Rogers',
      email: 'steve.rogers@captainamerica.org',
      mobile: '987-654-3110',
      website: 'www.captainamerica.org',
    },

    {
      id: 11,
      firstName: 'Tony',
      lastName: 'Stark',
      email: 'tony.stark@starkindustries.org',
      mobile: '987-654-3110',
      website: 'www.starkindustries.org',
    },

    {
      id: 11,
      firstName: 'Diksha',
      lastName: 'Pandey',
      email: 'dikshadiksha202020@gmail.com',
      mobile: '758-777-3490',
      website: 'www.diksha,com',
    },

    {
      id: 11,
      firstName: 'Suraj',
      lastName: 'Singh',
      email: 'surajsingh0505@gmail.com',
      mobile: '831-940-1473',
      website: 'www.singh.com',
    },

  ]);

  const handleDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {cards.map((card) => (
        <UserCard key={card.id} {...card} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default App;

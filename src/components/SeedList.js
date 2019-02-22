import uuid from 'uuid';

export const seed = [{
  id: uuid.v4(),
  label: 'Personal',
  items: [{
    id: uuid.v4(),
    description: 'Do laundry and fold clothes.',
    isComplete: false
  }, {
    id: uuid.v4(),
    description: 'Shovel snow off driveway and pour salt.',
    isComplete: false
  }, {
    id: uuid.v4(),
    description: 'Take car to get oil change and smog check.',
    isComplete: false
  }, {
    id: uuid.v4(),
    description: 'Prep lunch meals for week.',
    isComplete: false
  }]
}, {
  id: uuid.v4(),
  label: 'Family',
  items: [{
    id: uuid.v4(),
    description: "Send flowers to wife for Valentine's Day.",
    isComplete: false
  }, {
    id: uuid.v4(),
    description: "Make appointment with son's teacher.",
    isComplete: false
  }]
}, {
  id: uuid.v4(),
  label: 'Work',
  items: [{
    id: uuid.v4(),
    description: 'Respond to new emails.',
    isComplete: false
  }, {
    id: uuid.v4(),
    description: 'Follow up on existing tickets.',
    isComplete: false
  }, {
    id: uuid.v4(),
    description: 'Setup 1-on-1 meeting with manager.',
    isComplete: false
  }]
}];

export default { seed };
import React from 'react';
import { createAppContainer } from 'react-navigation';

import { ContactsStack } from './config/router';

export default createAppContainer(ContactsStack);
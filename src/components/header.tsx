import { title } from 'process';
import React from 'react';
import {ITitle} from '../interfaces/titulo'

const Header: React.FC<ITitle> = () => (
    <div>
      <h1>This is a Header</h1>
      <h2>This is a title {title}</h2>
    </div>


);

export default Header; 
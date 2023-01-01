import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {
	RecoilRoot
} from 'recoil';
import App from './App';
import './mock';

const root = createRoot(document.getElementById("root"));

root.render(
	<RecoilRoot>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</RecoilRoot>
);

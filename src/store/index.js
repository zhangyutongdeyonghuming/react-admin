import { atom, selector } from 'recoil';

/**
 * login atom
 */
export const loginAtom = atom({
	key: 'loginAtom',
	default: localStorage.getItem('token')
})

/**
 * login selector
 */
export const loginSelector = selector({
	key: 'loginSelector',
	get: ({ get }) => get(loginAtom) || localStorage.getItem('token'),
	set: ({ set }, token) => {
		localStorage.setItem('token', token)
		console.log('set token:', token)
		set(loginAtom)
	}
})

import {ContentfulClientApi, createClient} from 'contentful'

const client: ContentfulClientApi = createClient({
	space: process.env.REACT_APP_CONTENTFUL_SPACE || '',
	accessToken: process.env.REACT_APP_ACCESS_TOKEN || '',
	host: 'cdn.contentful.com',
})

export const getEntry = (entryId: string, query?: any) => {
	return client.getEntry(entryId, query).then(payload => {
		return payload.fields
	})
}

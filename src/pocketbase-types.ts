/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Jeux = "jeux",
	Players = "players",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type JeuxRecord = {
	AnneDeCreation?: number
	Nom?: string
	biographie?: string
	createur?: string
	genre?: string
	image?: string
}

export type PlayersRecord = {
	Image?: string
	Nom?: string
	Pays?: string
	Progression?: number
	Score?: number
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type JeuxResponse<Texpand = unknown> = Required<JeuxRecord> & BaseSystemFields<Texpand>
export type PlayersResponse<Texpand = unknown> = Required<PlayersRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	jeux: JeuxRecord
	players: PlayersRecord
	users: UsersRecord
}

export type CollectionResponses = {
	jeux: JeuxResponse
	players: PlayersResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'jeux'): RecordService<JeuxResponse>
	collection(idOrName: 'players'): RecordService<PlayersResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}

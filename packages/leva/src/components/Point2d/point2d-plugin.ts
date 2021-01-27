import { Format } from '../Point/point-plugin'
import { InternalNumberSettings } from '../Number/number-plugin'
import { Point2dObject } from '../../types/public-api-types'

export type InternalPoint2dSettings = { [key in keyof Point2dObject]: InternalNumberSettings } & { format: Format }

export const KEYS: (keyof Point2dObject)[] = ['x', 'y']

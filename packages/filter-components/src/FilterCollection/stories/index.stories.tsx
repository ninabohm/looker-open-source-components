/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { FilterCollection } from '../FilterCollection'

import { i18nResources } from '../../locales'
export { default as Basic } from './Basic'

export default {
  component: FilterCollection,
  parameters: {
    i18nResources,
    storyshots: { disable: true },
  },
  title: 'Filters/Stories/FilterCollection',
}

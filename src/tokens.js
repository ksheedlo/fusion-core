/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {createToken} from './create-token';
import type {SSRDecider, SSRBodyTemplate, Token, Context} from './types.js';

export const RenderToken = createToken('RenderToken');
export const ElementToken = createToken('ElementToken');
export const SSRDeciderToken: Token<SSRDecider> = createToken(
  'SSRDeciderToken'
);
export const HttpServerToken = createToken('HttpServerToken');
export const SSRBodyTemplateToken: Token<SSRBodyTemplate> = createToken(
  'SSRBodyTemplateToken'
);
export const RoutePrefixToken: Token<string> = createToken('RoutePrefixToken');

export type CriticalChunkIds = Set<number>;

export type CriticalChunkIdsService = {
  from(ctx: Context): CriticalChunkIds,
};

export const CriticalChunkIdsToken: Token<
  CriticalChunkIdsService
> = createToken('CriticalChunkIdsToken');

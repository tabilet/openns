/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import ExternalLink from './external-link';

/**
 * @module DocLink
 * `DocLink` components are used to render anchor links to relevant Vault documentation at openbao.org.
 *
 * @example
 * ```js
    <DocLink @path="/docs/secrets/kv/kv-v2.html">Learn about KV v2</DocLink>
 * ```
 *
 * @param {string} path="/" - The path to documentation on openbao.org that the component should link to.
 *
 */
export default class DocLinkComponent extends ExternalLink {
  host = 'https://openbao.org';

  get href() {
    return `${this.host}${this.args.path}`;
  }
}

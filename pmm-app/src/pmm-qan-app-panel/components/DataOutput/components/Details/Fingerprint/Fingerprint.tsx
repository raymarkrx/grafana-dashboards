import React from 'react';
// eslint-disable-next-line max-len
import { QueryTooltip } from '../../../../../../react-plugins-deps/components/Elements/QueryTooltip/QueryTooltip';
import { GROUP_BY_OPTIONS } from './Fingerprint.constants';
import { Styling } from './Fingerprint.styles';
import { Close } from '../../../../../../react-plugins-deps/components/Elements/Icons/Close';
import { Info } from '../../../../../../react-plugins-deps/components/Elements/Icons/Info';

const Fingerprint = (props) => {
  const {
    totals, query, queryId, groupBy, closeDetails,
  } = props;
  const currentGroupBy = GROUP_BY_OPTIONS.filter((option) => option.value === groupBy)[0];
  return (
    <div className={Styling.fingerprintWrapper} id="query-id">
      <div className={Styling.fingerprintView}>
        <h4>{!totals ? `${currentGroupBy.data.label} : ` : 'TOTAL'}</h4>
        &nbsp;
        {!totals ? (
          <div>
            <div className={Styling.fingerprint} style={{ color: 'rgba(32, 215, 255, 0.8)' }}>
              {query || 'N/A'}
            </div>
          </div>
        ) : null}
        {groupBy === 'queryid' && !totals ? (
          <QueryTooltip query={query} queryId={queryId}>
            <Info className={Styling.tooltipIcon} />
          </QueryTooltip>
        ) : null}
      </div>
      <Close className={Styling.closeButton} onClick={closeDetails} />
    </div>
  );
};

export default Fingerprint;

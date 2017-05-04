#!/usr/bin/env bash

# Creates branding emails for the brand.

TEMPLATES_DIR="/Users/hunmonk/git/circleanywhere/unhangout/custom/email_templates"
TEMPLATING_SCRIPT="${TEMPLATES_DIR}/brand-template.sh"

EMAIL_DIR=`dirname $0`

template_names="event-register.html
event-register-invite.html
event-register-message.html"

for name in ${template_names}; do
  ${TEMPLATING_SCRIPT} ${EMAIL_DIR}/brand-config.sh ${TEMPLATES_DIR}/${name} ${EMAIL_DIR}/${name}
done

exit 0


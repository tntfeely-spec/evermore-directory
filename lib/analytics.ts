declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

export interface ListingContext {
  business_name: string;
  state: string;
  city: string;
  provider_type: string;
}

export function trackListingWebsiteClick(listing: ListingContext) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click_listing_website', {
      listing_name: listing.business_name,
      listing_state: listing.state,
      listing_city: listing.city,
      listing_provider_type: listing.provider_type,
    });
  }
}

export function trackListingPhoneClick(listing: ListingContext) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click_listing_phone', {
      listing_name: listing.business_name,
      listing_state: listing.state,
      listing_city: listing.city,
      listing_provider_type: listing.provider_type,
    });
  }
}

export function trackContactFormSubmit(
  listing: ListingContext,
  messageLength: number,
  preference: string
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'submit_contact_form', {
      listing_name: listing.business_name,
      listing_state: listing.state,
      listing_city: listing.city,
      listing_provider_type: listing.provider_type,
      form_message_length: messageLength,
      form_preference: preference,
    });
  }
}

export function trackListingDetailView(listing: ListingContext) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_listing_detail', {
      listing_name: listing.business_name,
      listing_state: listing.state,
      listing_city: listing.city,
      listing_provider_type: listing.provider_type,
    });
  }
}

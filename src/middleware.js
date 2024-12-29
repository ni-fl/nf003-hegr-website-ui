// IMPORTS
import { NextResponse } from 'next/server';

// GET RESPONSE METHODS
const { next, redirect } = NextResponse;

// DEFINE PATH CATEGORIES
const authPaths = ['/login'];

// MIDDLEWARE
export const middleware = async (request) => {
	
	// TRY-CATCH BLOCK
	try {
		
		// GET REQUESTED PATHNAME
		const { pathname } = request.nextUrl;
		
		// GET ENV VARIABLES
		const { APP_ENVIRONMENT: environment } = process.env;
		
		// LET PASS ALWAYS FOR AUTH PATHS
		if (authPaths.includes(pathname)) {
			return next();
		}
		
		// LET PASS ALWAYS IN PRODUCTION
		if (environment === 'production') {
			return next();
		}
		
		// GET TOKEN OF COOKIE
		const authToken = (request.cookies).get('auth-token');
		
		// CHECK IF COOKIE IS AVAILABLE
		if (!authToken) throw new Error('No auth-token available!');
		
		// LET USER PASS
		return next();
		
	}
		
		// HANDLE ERRORS
	catch (error) {
		
		// RETURN TO LOGIN PAGE
		return redirect(new URL('/login', request.url));
		
	}
	
};

// CONFIG
export const config = {
	
	// MATCHER
	matcher: [
		'/',
		'/projects',
		'/project/:path*',
		'/info',
		'/contact',
		'/imprint',
		'/data-privacy'
	]
	
};
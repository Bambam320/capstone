class SessionsController < ApplicationController
  #rescues exceptions when data is not found or invalid
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  # wraps incoming parameters to let Rails see them
  wrap_parameters format: []
  
  # finds a user and authenticates them then returns the user with 201 status code
  # sessions#login
  def create
    user = User.find_by!(username: user_params[:username])
    if user&.authenticate(user_params[:password])
      session[:user_id]= user.id
      render json: user, status: 201
  end
  
  #if the user is logged in, the users data and all associated information will be returned
  # sessions#me
  def show
    if session[:user_id]
      user = User.find(session[:user_id])
    end
  end

  #the user in the sessions will be logged out
  # sessions#logout
  def destroy
    session[:user_id] = nil
    head :no_content
  end

  #private methods for users_controller
  private 

  # Only allow a list of trusted parameters through.
  def user_params
    params.permit(:username, :password)
  end

  #returns the errors in case the exceptions are raised
  def render_unprocessable_entity_response invalid
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  #returns the errors in case the record isnt found
  def render_not_found_response
    render json: { errors: ["User not found"] }, status: :not_found
  end

end

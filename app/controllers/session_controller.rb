class SessionController < ApplicationController
    #the user in the sessions will be logged out
  # DELETE /logout
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
